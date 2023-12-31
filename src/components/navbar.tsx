import { Button } from "./ui/button";
import WalletConnectButton from "./wallet-connect-button";
import { useTranslation } from "react-i18next";
import SwitchNetworkButton from "./SwitchNetworkButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="bg-card">
      <div className="container flex flex-wrap items-center justify-between gap-5 py-5">
        <nav className="flex flex-wrap items-center gap-2 lg:gap-5">
          <Button variant={"accent"} asChild className="gap-2">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                className="w-4 h-4"
              >
                <path
                  d="M9.42598 11.7707C10.7274 11.7707 11.7825 12.8258 11.7825 14.1272V18.8402H7.06949V14.1272C7.06949 12.8258 8.12454 11.7707 9.42598 11.7707Z"
                  fill="currentColor"
                />
                <path
                  d="M5.49848 14.1272V18.8402H2.3565C1.05506 18.8402 1.14441e-05 17.7852 1.14441e-05 16.4837V9.3192C-0.000173569 8.91112 0.158411 8.51899 0.442259 8.22579L7.11739 1.0094C8.2952 -0.264951 10.283 -0.343194 11.5574 0.834611C11.6179 0.890578 11.6763 0.948864 11.7322 1.0094L18.3956 8.22343C18.688 8.51785 18.8521 8.91602 18.852 9.33099V16.4837C18.852 17.7852 17.7969 18.8402 16.4955 18.8402H13.3535V14.1272C13.3388 11.9853 11.6095 10.2362 9.5215 10.1858C7.36368 10.1338 5.51494 11.9127 5.49848 14.1272Z"
                  fill="currentColor"
                />
                <path
                  d="M9.42598 11.7707C10.7274 11.7707 11.7825 12.8258 11.7825 14.1272V18.8402H7.06949V14.1272C7.06949 12.8258 8.12453 11.7707 9.42598 11.7707Z"
                  fill="currentColor"
                />
              </svg>
              <span className="hidden lg:block">{t("navbar.home")}</span>
            </Link>
          </Button>
          <Button variant={"accent"} asChild className="gap-2">
            <Link to="/token-locker">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                className="w-4 h-4"
              >
                <path
                  d="M9.42598 11.7707C10.7274 11.7707 11.7825 12.8258 11.7825 14.1272V18.8402H7.06949V14.1272C7.06949 12.8258 8.12454 11.7707 9.42598 11.7707Z"
                  fill="currentColor"
                />
                <path
                  d="M5.49848 14.1272V18.8402H2.3565C1.05506 18.8402 1.14441e-05 17.7852 1.14441e-05 16.4837V9.3192C-0.000173569 8.91112 0.158411 8.51899 0.442259 8.22579L7.11739 1.0094C8.2952 -0.264951 10.283 -0.343194 11.5574 0.834611C11.6179 0.890578 11.6763 0.948864 11.7322 1.0094L18.3956 8.22343C18.688 8.51785 18.8521 8.91602 18.852 9.33099V16.4837C18.852 17.7852 17.7969 18.8402 16.4955 18.8402H13.3535V14.1272C13.3388 11.9853 11.6095 10.2362 9.5215 10.1858C7.36368 10.1338 5.51494 11.9127 5.49848 14.1272Z"
                  fill="currentColor"
                />
                <path
                  d="M9.42598 11.7707C10.7274 11.7707 11.7825 12.8258 11.7825 14.1272V18.8402H7.06949V14.1272C7.06949 12.8258 8.12453 11.7707 9.42598 11.7707Z"
                  fill="currentColor"
                />
              </svg>
              <span className="hidden lg:block">
                {t("navbar.token-locker")}
              </span>
            </Link>
          </Button>
          <Button variant={"accent"} asChild className="gap-2">
            <a href="https://docs.bitindi.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="w-4 h-4"
              >
                <g clipPath="url(#clip0_1_19)">
                  <path
                    d="M10.5 5.25V0.345C11.1938 0.607001 11.824 1.01348 12.3488 1.5375L14.9618 4.152C15.4864 4.67616 15.8932 5.30617 16.155 6H11.25C11.0511 6 10.8603 5.92098 10.7197 5.78033C10.579 5.63968 10.5 5.44891 10.5 5.25ZM16.5 7.86375V14.25C16.4988 15.2442 16.1033 16.1973 15.4003 16.9003C14.6973 17.6033 13.7442 17.9988 12.75 18H5.25C4.2558 17.9988 3.30267 17.6033 2.59967 16.9003C1.89666 16.1973 1.50119 15.2442 1.5 14.25V3.75C1.50119 2.7558 1.89666 1.80267 2.59967 1.09966C3.30267 0.396661 4.2558 0.00119089 5.25 0L8.63625 0C8.7585 0 8.87925 0.00975 9 0.018V5.25C9 5.84674 9.23705 6.41903 9.65901 6.84099C10.081 7.26295 10.6533 7.5 11.25 7.5H16.482C16.4903 7.62075 16.5 7.7415 16.5 7.86375ZM10.5 14.25C10.5 14.0511 10.421 13.8603 10.2803 13.7197C10.1397 13.579 9.94891 13.5 9.75 13.5H6C5.80109 13.5 5.61032 13.579 5.46967 13.7197C5.32902 13.8603 5.25 14.0511 5.25 14.25C5.25 14.4489 5.32902 14.6397 5.46967 14.7803C5.61032 14.921 5.80109 15 6 15H9.75C9.94891 15 10.1397 14.921 10.2803 14.7803C10.421 14.6397 10.5 14.4489 10.5 14.25ZM12.75 11.25C12.75 11.0511 12.671 10.8603 12.5303 10.7197C12.3897 10.579 12.1989 10.5 12 10.5H6C5.80109 10.5 5.61032 10.579 5.46967 10.7197C5.32902 10.8603 5.25 11.0511 5.25 11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12H12C12.1989 12 12.3897 11.921 12.5303 11.7803C12.671 11.6397 12.75 11.4489 12.75 11.25Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_19">
                    <rect width="18" height="18" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
              <span className="hidden lg:block">{t("navbar.docs")}</span>
            </a>
          </Button>
          <Button variant={"accent"} asChild className="gap-2">
            <a href="https://t.me/bitindi" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="w-4 h-4"
              >
                <g clipPath="url(#clip0_1_25)">
                  <path
                    d="M1.73249 12.894L5.85749 17.019C5.28072 17.2539 4.64747 17.3134 4.03703 17.1901C3.42659 17.0668 2.8661 16.7661 2.42574 16.3258C1.98537 15.8854 1.68471 15.3249 1.5614 14.7145C1.43808 14.104 1.4976 13.4708 1.73249 12.894ZM5.49524 1.485C5.69018 1.44522 5.86132 1.32963 5.97103 1.16366C6.08074 0.997688 6.12003 0.794935 6.08024 0.6C6.04046 0.405066 5.92487 0.23392 5.7589 0.124211C5.59293 0.0145021 5.39018 -0.0247821 5.19524 0.0150004C3.184 0.367347 1.383 1.47386 0.159743 3.10875C0.0487267 3.26893 0.00442434 3.46604 0.0362197 3.65833C0.0680151 3.85061 0.173411 4.02296 0.330083 4.13888C0.486755 4.2548 0.682398 4.30518 0.875573 4.27935C1.06875 4.25352 1.24428 4.15351 1.36499 4.0005C2.36561 2.6605 3.8455 1.75918 5.49524 1.485ZM17.4 12.0173C17.2058 11.9746 17.0025 12.0109 16.835 12.1181C16.6675 12.2252 16.5494 12.3945 16.5067 12.5888C16.2218 14.2071 15.3325 15.6567 14.019 16.644C13.8583 16.7614 13.7508 16.9378 13.7201 17.1344C13.6894 17.331 13.7381 17.5318 13.8555 17.6925C13.9729 17.8532 14.1493 17.9607 14.3459 17.9914C14.5425 18.0221 14.7433 17.9734 14.904 17.856C16.5091 16.6496 17.6036 14.8852 17.9715 12.9113C17.9927 12.815 17.9948 12.7156 17.9775 12.6185C17.9603 12.5215 17.9241 12.4289 17.871 12.3458C17.8179 12.2628 17.749 12.1911 17.6682 12.1347C17.5874 12.0783 17.4962 12.0384 17.4 12.0173ZM15.1252 3.93525L16.2802 2.78025C16.3519 2.71107 16.409 2.62831 16.4483 2.5368C16.4876 2.4453 16.5083 2.34689 16.5092 2.2473C16.51 2.14772 16.4911 2.04896 16.4534 1.95678C16.4156 1.86461 16.36 1.78087 16.2895 1.71045C16.2191 1.64003 16.1354 1.58434 16.0432 1.54663C15.951 1.50892 15.8523 1.48995 15.7527 1.49081C15.6531 1.49168 15.5547 1.51237 15.4632 1.55167C15.3717 1.59098 15.2889 1.64812 15.2197 1.71975L14.0632 2.87625C13.0278 2.05343 11.761 1.57493 10.4401 1.50769C9.11925 1.44045 7.81041 1.78784 6.69674 2.50125L2.57174 5.05125C2.08803 5.35019 1.67822 5.75469 1.373 6.23446C1.06777 6.71423 0.875046 7.25684 0.809251 7.82165C0.743456 8.38647 0.806297 8.95884 0.993067 9.49593C1.17984 10.033 1.4857 10.5209 1.88774 10.923L7.10699 16.1423C7.50985 16.5452 7.99883 16.8516 8.53716 17.0384C9.07548 17.2252 9.64915 17.2875 10.215 17.2207C10.7809 17.1538 11.3243 16.9596 11.8043 16.6525C12.2842 16.3454 12.6884 15.9335 12.9862 15.4478L15.6862 11.0408C16.3069 9.93394 16.5848 8.66778 16.485 7.40279C16.3851 6.1378 15.9118 4.93095 15.1252 3.93525Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_25">
                    <rect width="18" height="18" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
              <span className="hidden lg:block">{t("navbar.help")}</span>
            </a>
          </Button>
        </nav>
        <div className="flex flex-wrap items-center gap-2 lg:gap-5">
          <SwitchNetworkButton />
          <WalletConnectButton />
        </div>
      </div>
    </div>
  );
}
