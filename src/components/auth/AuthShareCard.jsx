import PropTypes from "prop-types";

const AuthShareCard = ({ floatingRef }) => {
  return (
    <div
      ref={floatingRef}
      className="
        absolute
        bottom-[15%]
        right-[8%]
        hidden
        w-48
        rotate-[-6deg]
        md:block
        lg:right-[15%]
      "
    >
      <div
        className="
          rounded-2xl
          border
          border-base-content/10
          bg-base-100/65
          p-4
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold">Share your moment</span>

          <span className="text-base-content/40">↗</span>
        </div>

        <div className="h-2 w-3/4 rounded-full bg-base-content/10" />
        <div className="mt-2 h-2 w-1/2 rounded-full bg-base-content/10" />

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-base-content/10">
          <div
            className="
              h-full
              w-2/3
              rounded-full
              bg-linear-to-r
              from-rose-500
              to-pink-400
            "
          />
        </div>
      </div>
    </div>
  );
};

AuthShareCard.propTypes = {
  floatingRef: PropTypes.object,
};

export default AuthShareCard;
