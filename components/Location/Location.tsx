import Image from "next/image";

interface props {
    imageSrc: string;
    address: string;
    phone?: string;
    email: string;
 
  }
  function Location({ imageSrc, address, phone, email }: props) {
    return (
        <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={imageSrc}
          alt="location"
          width={300}
          height={200}
          className="max-h-[200px] max-w-[300px] object-contain"
        />
        <div className="max-w-[400px] border-light border-l-4 pl-8">
          <h6 className="text-4xl font-thin text-light uppercase mb-8">
            Toronto
          </h6>
          <address className="text-light not-italic [&>*]:mb-2">
            <p>
              <strong>Address:</strong> {address}
            </p>

            <p>
              <strong> Phone:</strong> {phone}
            </p>

            <p>
              <strong>Email:</strong> {email}
            </p>
          </address>
        </div>
      </div>
    );
  }
  
  export default Location;
