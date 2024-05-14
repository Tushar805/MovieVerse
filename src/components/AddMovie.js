import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "@firebase/firestore";
import { MoviesRef } from "../firebase/FireBase";
import swal from "sweetalert";

const AddMovie = () => {
  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const add = async () => {
    setLoading(true);
    try {
      await addDoc(MoviesRef, form);
      swal({
        title: "Successfully Added",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
       {/*iski madad se jab hum movie add kar dete hai tab input fields ko dubara null kar rhe hai */}
      setForm({
        title: "",
        year: "",
        description: "",
        image: "",
      });
    } catch (err) {
      swal({
        title: "Successfully Added",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    // ye ek from ka code haijo tailblock.cc se copy kara hai
    <div>
      <section class="text-white body-font relative">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-5xl  font-medium title-font mb-4 text-white">
              Add <span className="text-red-500"> Movie</span>
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="title" class="leading-7 text-sm text-white">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="year" class="leading-7 text-sm text-white">
                    Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="image" class="leading-7 text-sm text-white">
                    Image Link
                  </label>
                  <input
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-white">
                    Description
                  </label>
                  <textarea
                    type="String"
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  onClick={add}
                  class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center"
                >
                  {loading ? <TailSpin height={25} color="white" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
