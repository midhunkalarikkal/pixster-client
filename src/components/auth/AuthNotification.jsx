import PropTypes from "prop-types";

const AuthNotification = ({ floatingRef }) => {
  return (
    <div
      ref={floatingRef}
      className="
        absolute
        right-[7%]
        top-[20%]
        hidden
        rotate-[7deg]
        md:block
        lg:right-[14%]
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-base-content/10
          bg-base-100/70
          px-4
          py-3
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-linear-to-r
            from-rose-500
            to-pink-400
            text-white
          "
        >
          ♥
        </div>

        <div>
          <p className="text-sm font-semibold">New interaction</p>

          <p className="text-xs text-base-content/50">
            Someone liked your post
          </p>
        </div>
      </div>
    </div>
  );
};

AuthNotification.propTypes = {
  floatingRef: PropTypes.object,
};

export default AuthNotification;
