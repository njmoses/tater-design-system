import { ExternalLink, ArrowRightMd } from 'react-coolicons';
import { Link } from '@/components/Link/Link';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

type SnackbarStatus =
  | "default"
  | "information"
  | "success"
  | "error"
  | "warning"
  | "disabled";

export interface SnackbarProps {
  /** The status/variant of the snackbar */
  status?: SnackbarStatus;
  /** The theme for the snackbar */
  theme?: Theme;
  /** Title text displayed at the top */
  title?: string;
  /** Whether to show the title */
  showTitle?: boolean;
  /** Body text displayed below the title */
  body?: string;
  /** Whether to show the body */
  showBody?: boolean;
  /** Whether to show the close button */
  showClose?: boolean;
  /** Called when the close button is clicked */
  onClose?: () => void;
  /** Whether to show the link row */
  showLink?: boolean;
  /** Link text */
  linkText?: string;
  /** Called when the link is clicked */
  onLinkClick?: () => void;
  /** Additional CSS class name */
  className?: string;
}

function getStatusColors(
  t: ReturnType<typeof useTokens>,
  status: SnackbarStatus
) {
  const tokenKey = status === "default" ? "primary" : status;
  return {
    title: t.text[tokenKey].default,
    bar: t.surface[tokenKey].default,
    icon: t.icon[tokenKey].default,
  };
}

function InfoIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
        fill={color}
      />
    </svg>
  );
}

function CloseIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
        fill={color}
      />
    </svg>
  );
}

export function Snackbar({
  status = "default",
  theme = "light",
  title = "Snackbar Title",
  showTitle = true,
  body = "Lorem ipsum is the standard dummy text of the type industry.",
  showBody = true,
  showClose = true,
  onClose,
  showLink = true,
  linkText = "Link",
  onLinkClick,
  className,
}: SnackbarProps) {
  const t = useTokens(theme);
  const colors = getStatusColors(t, status);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        gap: t.layoutSpacing.sm,
        padding: t.layoutSpacing.sm,
        width: 512,
        backgroundColor: t.base,
        borderRadius: t.borderRadius[300],
        overflow: "clip",
        fontFamily: typography.body.md.fontFamily,
        boxSizing: "border-box",
      }}
    >
      {/* Progress bar at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: t.borderWidth.md,
          backgroundColor: t.border.default.default,
          borderRadius: t.borderRadius.round,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            backgroundColor: colors.bar,
            borderRadius: t.borderRadius.round,
          }}
        />
      </div>

      {/* Icon + Content container */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: t.layoutSpacing.sm,
          flex: "1 0 0",
          minWidth: 0,
        }}
      >
        {/* Status icon */}
        <div style={{ flexShrink: 0 }}>
          <InfoIcon color={colors.icon} />
        </div>

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: t.layoutSpacing.sm,
            flex: "1 0 0",
            minWidth: 0,
          }}
        >
          {/* Title and body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: t.layoutSpacing.xsm,
              width: "100%",
            }}
          >
            {showTitle && (
              <p
                style={{
                  margin: 0,
                  ...typography.body.lg,
                  lineHeight: `${typography.body.lg.lineHeight}px`,
                  color: colors.title,
                  whiteSpace: "pre-wrap",
                }}
              >
                {title}
              </p>
            )}
            {showBody && (
              <p
                style={{
                  margin: 0,
                  ...typography.body.md,
                  lineHeight: `${typography.body.md.lineHeight}px`,
                  color: t.text.default.body,
                  whiteSpace: "pre-wrap",
                }}
              >
                {body}
              </p>
            )}
          </div>

          {/* Link — alignSelf so the row does not stretch full width in the flex column */}
          {showLink && (
            <div style={{ alignSelf: 'flex-start', maxWidth: '100%' }}>
              <Link
                type="basic"
                status={status === "disabled" ? "disabled" : "default"}
                label={linkText}
                showLeadingIcon
                leadingIcon={ExternalLink}
                showTrailingIcon
                trailingIcon={ArrowRightMd}
                theme={theme}
                onClick={onLinkClick}
              />
            </div>
          )}
        </div>
      </div>

      {/* Close button */}
      {showClose && (
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "flex",
          }}
        >
          <CloseIcon color={t.icon.default.emphasis} />
        </button>
      )}
    </div>
  );
}
