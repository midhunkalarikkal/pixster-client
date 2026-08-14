const AuthPeopleCard = ({ floatingRef }) => {
  return (
    <div
      ref={floatingRef}
      className="
        absolute
        bottom-[17%]
        left-[10%]
        hidden
        rotate-[6deg]
        md:block
        lg:left-[17%]
      "
    >
      <div
        className="
          rounded-2xl
          border
          border-base-content/10
          bg-base-100/65
          p-3
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="flex -space-x-3">
          <div className="h-10 w-10 rounded-full border-2 border-base-100 bg-rose-300" />

          <div className="h-10 w-10 rounded-full border-2 border-base-100 bg-sky-300" />

          <div className="h-10 w-10 rounded-full border-2 border-base-100 bg-orange-300" />

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border-2
              border-base-100
              bg-linear-to-r
              from-rose-500
              to-pink-400
              text-xs
              font-bold
              text-white
            "
          >
            +9
          </div>
        </div>

        <p className="mt-2 text-xs text-base-content/50">
          Your people are here
        </p>
      </div>
    </div>
  );
};

export default AuthPeopleCard;