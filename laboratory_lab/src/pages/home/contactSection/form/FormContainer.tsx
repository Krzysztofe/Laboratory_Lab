import { useState, FormEvent } from "react";
import BtnFormSubbmit from "../../../../components/btnFormSubmit/BtnFormSubbmit";
import TextInput from "../../../../components/inputs/textInput/TextInput";

const FormContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <aside className="contactformContainer">
      <h3 className="contactformContainer__title">
        Skontaktuj się z grupą <br /> badawczą
      </h3>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="contactForm__inputWrapper">
          <TextInput
            type={"text"}
            name={"name"}
            value={""}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log("")
            }
            label={"Wpisz imię"}
            placeholder={"Imię"}
            containerClass={"contactForm__container"}
            labelClass={"contactForm__label"}
            inputClass={"contactForm__input"}
          />
          <div className="contactForm__error">
            {isOpen && <small>Formularz w przygotowaniu</small>}
          </div>
        </div>

        <div className="contactForm__inputWrapper">
          <TextInput
            type={"text"}
            name={"email"}
            value={""}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log("")
            }
            label={"Wpisz email"}
            placeholder={"Email"}
            containerClass={"contactForm__container"}
            labelClass={"contactForm__label"}
            inputClass={"contactForm__input"}
          />
          <div className="contactForm__error">
            {isOpen && <small>Formularz w przygotowaniu</small>}
          </div>
        </div>

        <div
          className="contactForm__inputContainer
                    contactForm__inputContainer--textarea"
        >
          <label className="contactForm__label">Wpisz wiadomość</label>
          <textarea
            name="message"
            className="contactForm__input contactForm__input--textarea"
            rows={4}
            placeholder="Wiadomość"
          />
          <div className="contactForm__error">
            {isOpen && <small>Formularz w przygotowaniu</small>}
          </div>
        </div>

        <BtnFormSubbmit label={"Wyślij"} class={"btn contactForm__btn"} />
      </form>
    </aside>
  );
};

export default FormContainer;
