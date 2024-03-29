import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { useValidationForm } from "../../../hooks/useValidationForm";
import { RootState } from "../../../redux/store";
import { handleChange } from "../../../redux/storeFeatures/tableReactionsSlice";
import { solventIdx } from "../../../utils/solventIdx";
import {
  thValuesFirst,
  thValuesSecond,
} from "../tableEditForm/dataTableEditForm";
import {
  inputsPrintDataFirst,
  inputsPrintDataSecond,
} from "./dataTableEditForm";

const TableEditForm = () => {
  const dispatch = useDispatch();
  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const { validationForm } = useValidationForm(editedReaction);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name: name, value: value }));
  };




  const inputsPrintData = isOpen ? inputsPrintDataFirst : inputsPrintDataSecond;

  const getThValues = isOpen ? thValuesFirst : thValuesSecond;

  return (
    <>
      {inputsPrintData.map(({ type, name }, idx) => {
        return (
          <td
            data-cell={`${getThValues[idx]}`}
            style={{ position: "relative" }}
            key={name}
            className={`${
              (name === "solvent" && "editForm__solventCellDisplay") ||
              (name === "finishDate" && "editForm__solventCellDisplay")
            }`}
          >
            <div className="editForm__inputWrapper">
              <TextInput
                label={""}
                type={type}
                name={name}
                value={
                  Array.isArray(editedReaction[name])
                    ? editedReaction[name].join(", ")
                    : editedReaction[name]
                }
                handleChange={handleInputChange}
              
                containerClass={"editForm__textInputContainer"}
                labelClass={"editForm__textInputLabel"}
                inputClass={"editForm__textInput" }
              />

          
              <div className="editForm__error">
                {validationForm()[name as keyof typeof validationForm]}
              </div>
            </div>
          </td>
        );
      })}
    </>
  );
};

export default TableEditForm;
