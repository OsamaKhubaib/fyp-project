import { Facebook, Instagram } from "lucide-react";
export const Footer = () => {
  return (
    <div className="h-[400px] bg-[#003B73]" >
      <div className="flex text-white justify-around items-center h-full">
        
      
      {" "}
      <div className="w-[300px]">
        <h2 className="font-bold">Denta Vision</h2>
        <p>
          Denta Vision uses AI to deliver fast, accurate dental diagnostics,
          empowering patients and professionals with clarity, confidence, and
          accessible, technology-driven dental care.
        </p>
        <div className="flex">
          <Facebook />
          <Instagram />
        </div>
      </div>
      <div>
        <h2 className="font-bold" >Links</h2>
       
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>features</li>
          <li>How it Works</li>
        </ul>
      </div>
      <div className="w-[300px]"> 
         
        <h2 className="font-bold ">NewsLetter</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered.
        </p>
        <div className="flex">Sign up</div>
      </div>
      </div>
    </div>
  );
};
