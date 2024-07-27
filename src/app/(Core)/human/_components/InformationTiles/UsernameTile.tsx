"use client";
import { FaRegAddressCard } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { useState } from "react";
import {
  checkIsUserNameExists,
  setUserNameDB,
} from "../../_functionality/ServerActions";

export default function UsernameTile({ value }: { value?: string }) {
  const [isUserNameExists, setIsUserNameExists] = useState<-1 | 0 | 1>(0);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const validateAndSet = (s: string) => {
    const x = /^([a-z]|[A-Z]|[0-9]|_|\.)*$/.test(s);
    if (!x) {
      setIsValid(false);
      return;
    }
    if (s.length > 30) {
      setIsValid(false);
      return;
    }
    if (s.length < 3) {
      setUserName(s);
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setUserName(s);
  };
  return (
    <div
      className="group bg-[--bg] hover:bg-[--focusShade]"
      style={{
        border: "4px solid var(--mg)",
        flexDirection: "column",
        borderRadius: "10px",
        userSelect: "none",
        overflow: "hidden",
        maxWidth: "80vw",
        padding: "15px",
        display: "flex",
        width: "100%",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
          paddingRight: "10px",
          alignItems: "center",
          fontSize: "30px",
          display: "flex",
        }}
      >
        <span>User Name:</span>
        <div style={{ fontSize: "30px" }}>
          <FaRegAddressCard className="group-hover:hidden block" />
          <FaAddressCard className="group-hover:block hidden" />
        </div>
      </div>
      {value ? (
        <div
          style={{
            fontSize: "clamp(26px,4vw,50px)",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          @{value}
        </div>
      ) : (
        <div
          className="flex flex-col lg:flex-row md:flex-row"
          style={{
            justifyContent: "stretch",
            alignItems: "center",
            fontSize: "25px",
            padding: "10px",
            gap: "20px",
          }}
        >
          <div
            className="w-[100%] md:w-fit lg:w-fit"
            style={{
              flexDirection: "column",
              fontSize: "18px",
              display: "flex",
              gap: "5px",
              flex: 1,
            }}
          >
            <div>Please create a username.</div>
            <input
              placeholder="@UserName [a-z] [A-Z] [0-9] _ ."
              value={userName}
              onChange={(e) => validateAndSet(e.target.value)}
              style={{
                backgroundColor: "var(--bgx)",
                padding: "5px 10px",
                borderRadius: "7px",
                fontSize: "25px",
                width: "100%",
              }}
              type="text"
              name="username"
            />
            {/* IS USER NAME AVALIBALE */}
            {userName && isUserNameExists == 1 ? (
              <div style={{ color: "red" }}>Username already exists.</div>
            ) : null}
            {userName && isUserNameExists == -1 ? (
              <div style={{ color: "green" }}>Username available.</div>
            ) : null}
            {/* USER NAME FORMAT VALIDATION */}
            {userName && !isValid ? (
              <div style={{ color: "red" }}>
                Invalid Username. Musct be in the format{" "}
                <b style={{ fontFamily: "monospace" }}>[a-z] [A-Z] [0-9] _ .</b>{" "}
                Min 3 characters. Max 30 Characters.
              </div>
            ) : null}
          </div>
          <div
            className="w-[100%] md:w-fit lg:w-fit"
            style={{
              justifyContent: "stretch",
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              style={{ padding: "5px 10px", borderRadius: "7px", flex: 1 }}
              className="bg-[#A0D9EF] hover:bg-[#62C1E5]"
              onClick={async () => {
                if (await checkIsUserNameExists(userName)) {
                  // EXISTS
                  setIsUserNameExists(1);
                } else {
                  // NOT EXISTS
                  setIsUserNameExists(-1);
                }
              }}
            >
              Check
            </button>
            <button
              onClick={async () => {
                validateAndSet(userName);
                if (isValid) {
                  if (!(await setUserNameDB(userName))) {
                    return setIsUserNameExists(1);
                  }
                  window?.location.reload();
                }
              }}
              style={{ padding: "5px 10px", borderRadius: "7px", flex: 1 }}
              className="bg-[#B1CF86] hover:bg-[#8EB15C]"
            >
              Set
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
