type DataProps = {
  image: string;
  title: string;
  description: string;
};

function Card({ image, title, description }: DataProps) {
  return (
    <div className="flex flex-col gap-5 items-center mt-15 xl:items-start xl:text-left xl:mx-10">
      <img src={image} alt={title} className="w-18" />
      <h3 className="font-display text-2xl">{title}</h3>
      <p className="font-body text-DarkGrayishViolet">{description}</p>
    </div>
  );
}

export default Card;
