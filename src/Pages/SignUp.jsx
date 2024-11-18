import { Input, Button } from "@nextui-org/react";

const SignUp = () => {
  return (
    <div>
      <section>
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          {/* Left Image Section */}
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Nature"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          {/* Form Section */}
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              {/* Logo */}
              <a className="block text-blue-600" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Path */}
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643..."
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Heading */}
              <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Squid
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Join us and explore the best experiences. Sign up now!
              </p>

              {/* Form */}
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                {/* First Name */}
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                    fullWidth
                  />
                </div>
                {/* Last Name */}
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="Last Name"
                    placeholder="Enter your last name"
                    fullWidth
                  />
                </div>
                {/* Email */}
                <div className="col-span-6">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    fullWidth
                  />
                </div>
                {/* Password */}
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    fullWidth
                  />
                </div>
                {/* Password Confirmation */}
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    label="Password Confirmation"
                    type="password"
                    placeholder="Confirm your password"
                    fullWidth
                  />
                </div>

                {/* Checkbox */}
                {/* <div className="col-span-6 ">
                  <Checkbox>
                    I want to receive emails about events and updates.
                  </Checkbox>
                </div> */}

                {/* Terms */}
                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our{" "}
                    <a
                      href="#"
                      className="text-gray-700 underline hover:text-blue-600"
                    >
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-gray-700 underline hover:text-blue-600"
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                {/* Submit */}
                <div className="col-span-6 md:flex justify-between sm:items-center sm:gap-4">
                  <Button type="submit" color="danger">
                    Create an Account
                  </Button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-gray-700 underline hover:text-blue-600"
                    >
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
