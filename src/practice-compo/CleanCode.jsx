import React from "react";
const cardData = [
  {
    id: 1,
    title: "pizza",
    description: "a cheesy delight with fresh toppings",
    image: "https://placehold.co/600x400",
    dateAdded: new Date(),
    style: { background: "#ffe", color: "#eee", width: "50%" },
  },
  {
    id: 2,
    title: "pasta",
    description: "a plate of rich, creamy pasta",
    image: "https://placehold.co/500x400",
    dateAdded: new Date(),
    style: { background: "#f0f0f0", color: "#555", width: "50%" },
  },
];

const formFields = [
  { label: "Title", type: "text", id: "title", placeholder: "Title" },
  {
    label: "Description",
    type: "textarea",
    id: "description",
    placeholder: "Title",
  },
  { label: "Image URL", type: "text", id: "image", placeholder: "text" },
  {
    label: "Background Color",
    type: "color",
    id: "backgroundColor",
    placeholder: "color",
  },
  { label: "Text Color", type: "color", id: "textColor", placeholder: "color" },
];

function CleanCode() {
  return (
    <>
      <div className="">
        {cardData.map((card, id) => (
          <div className="" key={id} style={card.style}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="form">
        <form>
          {formFields.map((field) => (
            <div key={field.id} className="form-group">
              <label htmlFor={field.id}>{field.label}</label>
              {field.type === "textarea" ? (
                <textarea id={field.id} placeholder={field.placeholder} />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </form>
      </div>
    </>
  );
}

export default CleanCode;
