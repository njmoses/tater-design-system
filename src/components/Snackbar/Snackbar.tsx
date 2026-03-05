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
    link: t.text[tokenKey].default,
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

function ExternalLinkIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z"
        fill={color}
      />
    </svg>
  );
}

function ArrowRightIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
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
        backgroundColor: t.default,
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

          {/* Link */}
          {showLink && (
            <button
              onClick={onLinkClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: t.layoutSpacing.sm,
                background: "none",
                border: "none",
                padding: 0,
                cursor: status === "disabled" ? "not-allowed" : "pointer",
              }}
            >
              <ExternalLinkIcon color={colors.link} />
              <span
                style={{
                  ...typography.body.md,
                  lineHeight: `${typography.body.md.lineHeight}px`,
                  color: colors.link,
                  textAlign: "center",
                }}
              >
                {linkText}
              </span>
              <ArrowRightIcon color={colors.link} />
            </button>
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
