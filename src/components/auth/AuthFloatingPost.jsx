import PropTypes from "prop-types";

const AuthFloatingPost = ({ floatingRef }) => {
  return (
    <div
      ref={floatingRef}
      className="
        absolute
        left-[7%]
        top-[16%]
        hidden
        w-52
        rotate-[-8deg]
        md:block
        lg:left-[13%]
      "
    >
      <div
        className="
          rounded-2xl
          border
          border-base-content/10
          bg-base-100/65
          p-3
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <div className="mb-3 flex items-center gap-2">
          <div
            className="
              h-8
              w-8
              rounded-full
              bg-linear-to-r
              from-rose-500
              to-pink-400
            "
          />

          <div>
            <div className="h-2 w-16 rounded-full bg-base-content/20" />
            <div className="mt-1 h-1.5 w-10 rounded-full bg-base-content/10" />
          </div>
        </div>

        <div
          className="
            h-28
            rounded-xl
            bg-linear-to-br
            from-rose-500
            via-pink-400
            to-sky-300
            opacity-80
          "
        />

        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="text-sm">♡</span>
            <span className="text-sm">◌</span>
            <span className="text-sm">⌁</span>
          </div>

          <span className="text-xs text-base-content/50">2.4k</span>
        </div>
      </div>
    </div>
  );
};

AuthFloatingPost.propTypes = {
  floatingRef: PropTypes.object,
};

export default AuthFloatingPost;
