import Button from "./Button";
import FormRow from "./FormRow";

function SignupForm() {
  return (
    <div className="">
      <form className="flex flex-col">
        <div className=" flex flex-col md:flex-row md:gap-6">
          <FormRow label="First Name:">
            <input
              type="text"
              className=" bg-stone-100 px-2 py-2 rounded-md w-full lg:w-full text-black-800 outline-none focus:ring-2 ring-primary"
            />
          </FormRow>
          <FormRow label="Last Name:">
            <input
              type="text"
              className=" bg-stone-100 px-2 py-2 rounded-md w-full lg:w-full text-black-800 outline-none focus:ring-2 ring-primary"
            />
          </FormRow>
        </div>
        <FormRow label="Email:">
          <input
            type="email"
            className=" bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
          />
        </FormRow>
        <div className="flex flex-col md:flex-row md:gap-6">
          <FormRow label="Password:">
            <input
              type="password"
              className=" bg-stone-100 px-2 py-2 rounded-md w-full lg:w-full text-black-800 outline-none focus:ring-2 ring-primary"
            />
          </FormRow>
          <FormRow label="Confirm:">
            <input
              type="password"
              className=" bg-stone-100 px-2 py-2 rounded-md w-full lg:w-full text-black-800 outline-none focus:ring-2 ring-primary"
            />
          </FormRow>
        </div>
        <span className=" text-xs max-w-xs text-slate-400 -mt-5 mb-4">
          Use 8 or more characters with a mix letters, numbers & symbols
        </span>

        <div className="flex items-center gap-2 mb-12">
          <input
            className=" bg-stone-100 h-4 w-4 accent-primary"
            type="checkbox"
          />
          <p className="text-black-800 text-sm font-normal">Show password</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-primary cursor-pointer hover:text-primary-darker transition-all">
            Sign in instead
          </p>
          <Button type="navigation">next</Button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
