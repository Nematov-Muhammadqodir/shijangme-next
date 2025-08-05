import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

const join = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    nick: "",
    password: "",
    phone: "",
    type: "USER",
  });
  const [loginView, setLoginView] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState(false);
  /** HANDLERS **/
  const viewChangeHandler = (state: boolean) => {
    setIsAnimating(true); // Start fade-out
    setTimeout(() => {
      setLoginView(state); // Change view after fade-out
      setIsAnimating(false); // Fade-in new content
    }, 300); // 300ms fade duration (must match CSS)
  };

  const checkUserTypeHandler = (e: any) => {
    const checked = e.target.checked;
    if (checked) {
      const value = e.target.name;
      handleInput("type", value);
    } else {
      handleInput("type", "USER");
    }
  };

  const handleInput = useCallback((name: any, value: any) => {
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  }, []);
  return (
    <div className="join-main-container" style={{ marginTop: "200px" }}>
      <Stack className="container">
        <Stack className="login-form-main">
          <Stack className="left-config">
            <div className={"info"}>
              <span>{loginView ? "login" : "signup"}</span>
              <p>
                {loginView ? "Login" : "Sign"} in with this account across the
                following sites.
              </p>
            </div>
            <Box
              className={`input-content-wrapper ${isAnimating ? "hidden" : ""}`}
            >
              <Box className={"input-wrap"}>
                <div className={"input-box"}>
                  <span>Nickname</span>
                  <input
                    type="text"
                    placeholder={"Enter Nickname"}
                    onChange={(e) => handleInput("nick", e.target.value)}
                    required={true}
                    //   onKeyDown={(event) => {
                    //     if (event.key == "Enter" && loginView) doLogin();
                    //     if (event.key == "Enter" && !loginView) doSignUp();
                    //   }}
                  />
                </div>
                <div className={"input-box"}>
                  <span>Password</span>
                  <input
                    type="text"
                    placeholder={"Enter Password"}
                    onChange={(e) => handleInput("password", e.target.value)}
                    required={true}
                    //   onKeyDown={(event) => {
                    //     if (event.key == "Enter" && loginView) doLogin();
                    //     if (event.key == "Enter" && !loginView) doSignUp();
                    //   }}
                  />
                </div>
                {!loginView && (
                  <div className={"input-box"}>
                    <span>Phone</span>
                    <input
                      type="text"
                      placeholder={"Enter Phone"}
                      onChange={(e) => handleInput("phone", e.target.value)}
                      required={true}
                      // onKeyDown={(event) => {
                      //   if (event.key == "Enter") doSignUp();
                      // }}
                    />
                  </div>
                )}
              </Box>
            </Box>

            <Box className={"register"}>
              {!loginView && (
                <div className={"type-option"}>
                  <span className={"text"}>I want to be registered as:</span>
                  <div>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            size="small"
                            name={"USER"}
                            onChange={checkUserTypeHandler}
                            checked={input?.type == "USER"}
                          />
                        }
                        label="User"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            size="small"
                            name={"AGENT"}
                            onChange={checkUserTypeHandler}
                            checked={input?.type == "AGENT"}
                          />
                        }
                        label="Agent"
                      />
                    </FormGroup>
                  </div>
                </div>
              )}

              {loginView && (
                <div className={"remember-info"}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked size="small" />}
                      label="Remember me"
                    />
                  </FormGroup>
                  <a>Lost your password?</a>
                </div>
              )}

              {loginView ? (
                <Button
                  variant="contained"
                  endIcon={<img src="/img/icons/rightup.svg" alt="" />}
                  disabled={input.nick == "" || input.password == ""}
                  //   onClick={doLogin}
                >
                  LOGIN
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disabled={
                    input.nick == "" ||
                    input.password == "" ||
                    input.phone == "" ||
                    input.type == ""
                  }
                  //   onClick={doSignUp}
                  endIcon={<img src="/img/icons/rightup.svg" alt="" />}
                >
                  SIGNUP
                </Button>
              )}
            </Box>
            <Box className={"ask-info"}>
              {loginView ? (
                <p>
                  Not registered yet?
                  <b
                    onClick={() => {
                      viewChangeHandler(false);
                    }}
                  >
                    SIGNUP
                  </b>
                </p>
              ) : (
                <p>
                  Have account?
                  <b onClick={() => viewChangeHandler(true)}> LOGIN</b>
                </p>
              )}
            </Box>
          </Stack>
          <Stack className="right-config">
            <img src="/img/general/green.jpg" alt="" className="green" />
            <Stack className="right-config-layout">
              <span className="login-intro">
                Start your journey by <br /> one click, explore <br /> beautiful
                world!
              </span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutBasic(join);
