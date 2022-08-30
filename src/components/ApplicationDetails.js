import { Link } from "react-router-dom";

// assets
import cross from "../assets/cross.svg";
import search from "../assets/search.svg";
import first from "../assets/first.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import last from "../assets/last.svg";

const ApplicationDetails = () => {
  return (
    <div className="w-full">
      <div className="w-8/12 mx-auto py-5">
        {/* Navlinks */}
        <div className="flex flex-nowrap gap-2 text-lg">
          <Link to="/" className="underline">
            Home
          </Link>
          <p>></p>
          <Link to="/application-details">Application status</Link>
        </div>
        {/* User Actions Container */}
        <div className="flex justify-end items-center gap-2">
          <p className="text-lg mr-2">Signed in as KARAN SINGH</p>
          <button className="transition duration-300 px-4 py-3 rounded-lg font-medium text-[#335075] bg-gray-100 border-2 border-white hover:border-[#335075]">
            Account home
          </button>
          <button className="transition duration-300 px-4 py-3 rounded-lg font-medium text-[#335075] bg-gray-100 border-2 border-white hover:border-[#335075]">
            Account profile
          </button>
          <button className="transition duration-300 px-4 py-3 rounded-lg font-medium text-[#335075] bg-gray-100 border-2 border-white hover:border-[#335075]">
            Help
          </button>
          <button className="transition duration-300 px-4 py-3 rounded-lg font-medium text-white bg-[#335075] border-2 border-[#335075] hover:border-gray-100">
            Sign out
          </button>
        </div>
        {/* Dashboard Heading */}
        <div className="text-left pt-10 pb-2 border-red-700 border-b">
          <h1 className="text-[38px] font-medium">Application status</h1>
        </div>
        {/* Additional documents text */}
        <div className="flex gap-5 text-xl font-semibold my-4">
          <p>Check the status and review the status of your application.</p>
          <Link to="#" className="text-[#335075] underline">
            How to submit additional documents.
          </Link>
        </div>
        {/* Application Status & Information */}
        <div className="flex gap-8 my-8 text-left">
          <div className="shadow-md w-2/4 h-fit">
            <p className="text-4xl font-semibold bg-gray-200 p-3">
              Application Status
            </p>
            <p className="text-xl font-normal my-5 px-3">
              We are processing your application. We will send you a message
              when there is an update or if we need more information from you.
            </p>
            <p className="text-xl font-bold my-5 px-3">Latest update:</p>
            <p className="text-xl font-bold my-5 px-3">
              Biometrics - August 5, 2022:{" "}
              <span className="font-normal">Completed</span>
            </p>
          </div>
          <div className="shadow-md w-2/4">
            <p className="text-4xl font-semibold bg-gray-200 p-3">
              Applicant information
            </p>
            <p className="text-xl font-bold mb-2 mt-5 px-3">
              Principal applicant:{" "}
              <span className="font-normal">PANKAJKUMAR AMBALAL PATEL</span>
            </p>
            <p className="text-xl font-bold my-2 px-3">
              Unique Client Identifier (UCI):{" "}
              <span className="font-normal">1129686272</span>
            </p>
            <p className="text-xl font-bold my-2 px-3">
              Application number:{" "}
              <span className="font-normal">V400751079</span>
            </p>
            <p className="text-xl font-bold my-2 px-3">
              Date received: <span className="font-normal">July 29, 2022</span>
            </p>
            <p className="text-xl font-bold my-2 px-3">Biometrics:</p>
            <p className="text-xl font-bold px-3 ml-8">
              Biometrics number:{" "}
              <span className="font-normal">00077520220805091127</span>
            </p>
            <p className="text-xl font-bold px-3 ml-8">
              Date of biometrics enrolment:{" "}
              <span className="font-normal">August 5, 2022</span>
            </p>
            <p className="text-xl font-bold mb-5 px-3 ml-8">
              Expiry date: <span className="font-normal">August 5, 2032</span>
            </p>
          </div>
        </div>
        {/* Estimated Remaining Time */}
        <div className="py-8 border-t-2 border-b-2 border-gray-300 text-left">
          <p className="mb-3 text-3xl font-bold">
            Estimated remaining processing time
          </p>
          <div className="py-4 bg-gray-300"></div>
          <div className="flex justify-between py-3">
            <p className="font-bold text-xl">
              Application recieved:{" "}
              <span className="font-medium">July 29, 2022</span>
            </p>
            <p className="font-bold">Estimated completion date*</p>
          </div>
          <p className="text-xl font-medium my-5">
            * The estimated processing time may change depending on how many
            applications we receive and other factors. This progress bar show
            the time elapsed since we received your application.
          </p>
        </div>
        {/* Details about application status */}
        <div className="py-8 text-left">
          <p className="mb-3 text-3xl font-bold">
            Details about your application status
          </p>
          <p className="text-xl font-medium my-3">
            When we get your application, there are a series of steps it may go
            through before we make a decision. Use the following table to find
            out the current status of each application step.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <img src={cross} alt="cross" className="w-5 h-5" />
            <p className="text-xl font-bold">Review of eligibility</p>
            <img src={cross} alt="cross" className="w-5 h-5" />
          </div>
          <li className="text-lg mt-3 list-disc ml-2 font-medium">
            Your application is in progress. We will send you a message when we
            start reviewing your eligibility.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={cross} alt="cross" className="w-5 h-5" />
            <p className="text-xl font-bold">Review of medical results</p>
            <img src={cross} alt="cross" className="w-5 h-5" />
          </div>
          <li className="text-lg mt-3 list-disc ml-2 font-medium">
            You do not need a medical exam. We will send you a message if this
            changes.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={cross} alt="cross" className="w-5 h-5" />
            <p className="text-xl font-bold">Review of additional documents</p>
            <img src={cross} alt="cross" className="w-5 h-5" />
          </div>
          <li className="text-lg mt-3 list-disc ml-2 font-medium">
            We do not need additional documents.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={cross} alt="cross" className="w-5 h-5" />
            <p className="text-xl font-bold">Interview</p>
            <img src={cross} alt="cross" className="w-5 h-5" />
          </div>
          <li className="text-lg mt-3 list-disc ml-2 font-medium">
            You do not need a interview. We will send you a message if this
            changes.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={cross} alt="cross" className="w-5 h-5" />
            <p className="text-xl font-bold">Biometrics</p>
            <img src={cross} alt="cross" className="w-5 h-5" />
          </div>
          <li className="text-lg mt-3 list-disc ml-2 font-bold">
            August 5, 2022 <span className="font-medium">Completed</span>
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={cross} alt="cross" className="w-5 h-5" />
            <p className="text-xl font-bold">Background check</p>
            <img src={cross} alt="cross" className="w-5 h-5" />
          </div>
          <li className="text-lg mt-3 list-disc ml-2 font-medium">
            We are processing your background check. We will send you a message
            if we need more information.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={cross} alt="cross" className="w-5 h-5" />
            <p className="text-xl font-bold">Final decision</p>
            <img src={cross} alt="cross" className="w-5 h-5" />
          </div>
          <li className="text-lg mt-3 list-disc ml-2 font-medium">
            Your applicant is in progress. We will send you a message once the
            final decision has been made.
          </li>
        </div>
        {/* Messages about your application */}
        <div className="text-left">
          <p className="text-3xl font-bold mb-8">
            Messages about your application
          </p>
          <div className="relative mr-6 my-2 flex w-fit">
            <input
              type="search"
              class="bg-purple-white shadow rounded border-2 p-3"
              placeholder="Search"
            />
            <img
              src={search}
              alt="search"
              className="w-4 h-4 absolute right-4 top-4"
            />
          </div>
        </div>
        {/* Messages about application table */}
        <div className="shadow-lg mt-4">
          <table className="text-left w-full table-auto border-collapse border-2 border-gray-200">
            <thead className="text-white text-xl bg-[#335075]">
              <tr>
                <th className="py-6 px-4">Subject</th>
                <th className="py-6 px-4">Data sent</th>
                <th className="py-6 px-4">Data read</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[#335075] underline font-bold text-lg py-8 px-4 border-2 border-gray-200">
                  Biometrics Collection Letter
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
              </tr>
              <tr>
                <td className="text-[#335075] underline font-bold text-lg py-8 px-4 border-2 border-gray-200">
                  Client Application Summary
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
              </tr>
              <tr>
                <td className="text-[#335075] underline font-bold text-lg py-8 px-4 border-2 border-gray-200">
                  Submission Confirmation
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
              </tr>
              <tr>
                <td className="text-[#335075] underline font-bold text-lg py-8 px-4 border-2 border-gray-200">
                  Confirmation of Online Application Transmission
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-5 justify-end py-6 text-xl  font-light">
            <p className="text-gray-400">Items per page:</p>
            <select className="border-b border-b-black">
              <option defaultValue value="5">
                5
              </option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="100">100</option>
            </select>
            <p>0 of 0</p>
            <img src={first} alt="first" />
            <img src={previous} alt="previous" />
            <img src={next} alt="next" />
            <img src={last} alt="last" />
          </div>
        </div>
        {/* Date Modified Container */}
        <div className="mt-10 flex flex-nowrap">
          <p className="text-lg">Date modified: 2022-06-14</p>
        </div>
        {/* Report a Problem Container */}
        <div className="flex justify-center items-center flex-nowrap box-border mt-10 bg-[#eaebed] w-1/5 rounded-lg border-4 hover:border-[#284162] transition-all shadow-lg">
          <Link to="#" className="text-base text-[#284162] p-2">
            Report a problem on this page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ApplicationDetails;
