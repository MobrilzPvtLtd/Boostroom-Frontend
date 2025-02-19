import Image from "next/image";
import React from "react";

function TextArea() {
  return (
    <>
      <div className="bg-[#042534] pb-24 px-12">
        <div className="max-w-6xl mx-auto ">
          <h2 className=" font-semibold text-gray-400">H2 Title</h2>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
            perspiciatis dolorum et commodi est reprehenderit sint repudiandae
            veritatis, corporis rem! Mollitia veniam at labore error culpa,
            dolorum quidem inventore?
         
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
            perspiciatis dolorum et commodi est reprehenderit sint repudiandae
            veritatis, corporis rem! Mollitia veniam at labore error culpa,
            dolorum quidem inventore?
          </p>
          <br />
          <br />

          <h3 className=" font-semibold text-gray-400"> H3 Title</h3>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
            perspiciatis dolorum et commodi est reprehenderit sint repudiandae
            veritatis, corporis rem! Mollitia veniam at labore error culpa,
            dolorum quidem inventore?
          </p>

          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            quaerat id nesciunt ad similique, non itaque ea. In illum labore
            modi veritatis dolorum reiciendis voluptatum impedit repellat
            fugiat, mollitia nulla. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta quaerat id nesciunt ad similique, non
            itaque ea. In illum labore modi veritatis dolorum reiciendis
            voluptatum impedit repellat fugiat, mollitia nulla.
          </p>

          <br />
          <br />

          <h5 className=" font-semibold text-gray-400"> H5 Title</h5>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
            perspiciatis dolorum et commodi est reprehenderit sint repudiandae
            veritatis, corporis rem! Mollitia veniam at labore error culpa,
            dolorum quidem inventore? <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            tempore odio quo adipisci dolor perferendis molestias vel hic porro,
            nostrum ipsum magnam nemo dicta eveniet saepe laudantium repellat
            rem veniam.
          </p>
        </div>
        <div className="relative w-full my-4">
          <Image
            src="/image/bg244.jpg"
            alt="Right gaming setup"
            width={800}
            height={200}
            layout="responsive"
            className="object-cover "
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto ">
          <h4 className=" font-semibold text-gray-400">H4 Title</h4>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
            perspiciatis dolorum et commodi est reprehenderit sint repudiandae
            veritatis, corporis rem! Mollitia veniam at labore error culpa,
            dolorum quidem inventore?
          </p>
          
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
            perspiciatis dolorum et commodi est reprehenderit sint repudiandae
            veritatis, corporis rem! Mollitia veniam at labore error culpa,
            dolorum quidem inventore?
          </p>
          <br />
          <br />

          <h2 className=" font-semibold text-gray-400"> H2 Title</h2>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
            perspiciatis dolorum et commodi est reprehenderit sint repudiandae
            veritatis, corporis rem! Mollitia veniam at labore error culpa,
            dolorum quidem inventore?
          </p>

          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            quaerat id nesciunt ad similique, non itaque ea. In illum labore
            modi veritatis dolorum reiciendis voluptatum impedit repellat
            fugiat, mollitia nulla. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta quaerat id nesciunt ad similique, non
            itaque ea. In illum labore modi veritatis dolorum reiciendis
            voluptatum impedit repellat fugiat, mollitia nulla.
          </p>
        </div>
      </div>
    </>
  );
}

export default TextArea;
