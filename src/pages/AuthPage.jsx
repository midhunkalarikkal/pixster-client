import gsap from "gsap";
import { useEffect, useRef } from "react";
import LoginForm from "../components/forms/LoginForm";
import { AnimatePresence, motion } from "framer-motion";
import SignUpForm from "../components/forms/SignUpForm";
import { useAuthFormStore } from "../store/useAuthFormStore";
import OtpVerifyForm from "../components/forms/OtpVerifyForm";
import { formBottomText, formTitle } from "../utils/constants";
import ResetPasswordForm from "../components/forms/ResetPasswordForm";
import AuthFloatingElements from "../components/auth/AuthFloatingElements";
import EmailVerificationForm from "../components/forms/EmailVerificationForm";

const AuthPage = () => {
  const pageRef = useRef(null);
  const cardRef = useRef(null);

  const {
    loginForm,
    signUpForm,
    verifyOtpForm,
    verifyEmailForm,
    resetPasswordForm,
    handleGotoSignUp,
    handleGotoLogin,
  } = useAuthFormStore();

  const activeForm = loginForm
    ? "login"
    : signUpForm
      ? "signup"
      : verifyOtpForm
        ? "otp"
        : verifyEmailForm
          ? "email"
          : resetPasswordForm
            ? "reset"
            : "";

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          pageRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.45,
          },
        )
        .fromTo(
          cardRef.current,
          {
            opacity: 0,
            y: 40,
            scale: 0.94,
            rotateX: 5,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
          },
          "-=0.15",
        );
    }, pageRef);

    return () => context.revert();
  }, []);

  const renderForm = () => {
    switch (activeForm) {
      case "login":
        return <LoginForm />;

      case "signup":
        return <SignUpForm />;

      case "email":
        return <EmailVerificationForm />;

      case "otp":
        return <OtpVerifyForm />;

      case "reset":
        return <ResetPasswordForm />;

      default:
        return null;
    }
  };

  const handleBottomAction = () => {
    if (loginForm) {
      handleGotoSignUp();
      return;
    }

    if (signUpForm) {
      handleGotoLogin();
      return;
    }

    handleGotoLogin();
  };

  return (
    <div
      ref={pageRef}
      className="fixed
    inset-0
        z-50
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        p-4
        sm:p-6
      "
    >
       <div className="absolute inset-0 bg-base-300/70 backdrop-blur-2xl" />

      <AuthFloatingElements />

      <div
        ref={cardRef}
        className="
          relative
          z-20
          w-full
          max-w-[460px]
        "
      >
        <div
          className="
            rounded-[2rem]
            bg-linear-to-r
            from-rose-500
            to-pink-400
            p-px
            shadow-[0_30px_100px_-20px_rgba(0,0,0,0.45)]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-base-content/5
              bg-base-100/90
              backdrop-blur-2xl
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-48
                w-48
                rounded-full
                bg-rose-500/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-48
                w-48
                rounded-full
                bg-pink-400/10
                blur-3xl
              "
            />

            <div className="relative p-6 sm:p-8">
              <div className="mb-7 text-center">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  <span
                    className="
                      text-3xl
                      font-black
                      italic
                    "
                  >
                    Pixster
                  </span>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeForm}
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      mt-2
                      min-h-6
                      text-sm
                      text-base-content/60
                    "
                  >
                    {formTitle[activeForm]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeForm}
                    initial={{
                      opacity: 0,
                      x: 24,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      x: -24,
                      filter: "blur(4px)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {renderForm()}
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeForm}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.1,
                  }}
                  className="mt-7 text-center"
                >
                  <p className="text-sm text-base-content/55">
                    {formBottomText[activeForm]}

                    {loginForm ? (
                      <button
                        type="button"
                        onClick={handleGotoSignUp}
                        className="
                          ml-2
                          font-semibold
                          text-rose-500
                          underline-offset-4
                          transition
                          hover:underline
                        "
                      >
                        Sign Up
                      </button>
                    ) : signUpForm ? (
                      <button
                        type="button"
                        onClick={handleGotoLogin}
                        className="
                          ml-2
                          font-semibold
                          text-rose-500
                          underline-offset-4
                          transition
                          hover:underline
                        "
                      >
                        Login
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleBottomAction}
                        className="
                          ml-2
                          font-semibold
                          text-rose-500
                          underline-offset-4
                          transition
                          hover:underline
                        "
                      >
                        Cancel
                      </button>
                    )}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;