import Link from "next/link";

export default function ConnectWalletComponent(props) {
  const Connect = () => {
    return (
      <div>
        <div>
          <Link
            className="flex w-full items-center justify-center rounded-sm  border-solid border-2 border-buttons bg-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
            href={'/mint'}
          >
            MINT
          </Link>
        </div>
      </div>
    );
  };

  const ConnectNav = () => {
    return (
      <div>
        <div>
          <button
            onClick={async () => {
              if (!props.wallet) {
                props.connect();
              } else {
                props.authAccount();
              }
            }}
            className="flex w-full items-center justify-center rounded-sm  border-solid border-2 border-buttons bg-buttons px-4 py-1 text-md font-medium text-white hover:bg-blues-600  "
          >
            {props.nav === true ? "CONNECT" : "CONNECT"}
          </button>
        </div>
      </div>
    );
  };

  const Done = () => {
    return (
      <div className="flex">
        <div className=" ">
          <div className="flex w-full items-center justify-center rounded-sm bg-buttons  px-8 py-3 text-md font-medium  ">
            <Link className="text-white" href={"/mint"} rel="noreferrer">
              MINT
            </Link>
          </div>
        </div>
      </div>
    );
  };
  const Application = () => {
    return (
      <div>
        <div className="flex uppercase w-full items-center justify-center rounded-sm  border-solid  border-2 border-white px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 ">
          Application time is over
        </div>
      </div>
    );
  };

  const Disconnect = () => {
    return (
      <div>
        <button
          onClick={() => props.disconnect()}
          className="flex cursor-pointer w-full items-center justify-center rounded-sm  border-solid bg-buttons border-2 border-buttons px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 "
        >
          DISCONNECT
        </button>
      </div>
    );
  };
  const DisconnectNav = () => {
    return (
      <div>
        <button
          onClick={() => props.disconnect()}
          className="flex cursor-pointer w-full items-center justify-center rounded-sm  border-solid bg-buttons border-2 border-buttons px-4 py-1 text-md font-medium text-white hover:bg-blues-600  "
        >
          DISCONNECT
        </button>
      </div>
    );
  };
  const Connecting = () => {
    return (
      <div>
        <div className="flex gap-1 w-full items-center justify-center rounded-sm    px-8 py-3 text-md font-medium text-white hover:bg-blues-600 md:py-4 md:px-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="white" strokeLinecap="round" strokeWidth="2">
              <path
                strokeDasharray="60"
                strokeDashoffset="60"
                strokeOpacity=".3"
                d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="1.3s"
                  values="60;0"
                />
              </path>
              <path
                strokeDasharray="15"
                strokeDashoffset="15"
                d="M12 3C16.9706 3 21 7.02944 21 12"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="15;0"
                />
                <animateTransform
                  attributeName="transform"
                  dur="1.5s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </g>
          </svg>
          CONNECTING
        </div>
      </div>
    );
  };
  if (props.connecting || props.authenticating) {
    return <Connecting />;
  }
  if (props.nav === true) {
    if (!props.authenticated) {
      return <ConnectNav />;
    } else {
      return <DisconnectNav />;
    }
  }

  if (
    props.authenticated &&
    !props.authenticating &&
    props.applicationStatus !== "mint done"
  ) {
    return <Done />;
  }

  if (props.authenticated && props.applicationStatus === "mint done") {
    return <Done />;
  }
  if (!props.authenticated) {
    return <Connect />;
  }
}
