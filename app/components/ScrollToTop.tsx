"use client";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-20 right-12 p-4">
          <button
            aria-label="scroll to top"
            type="button"
            className="py-2 px-2 rounded-sm bg-gray-500"
            onClick={scrollToTop}
          >
            <FaArrowUpLong />
          </button>
        </div>
      )}
    </>
  );
}
