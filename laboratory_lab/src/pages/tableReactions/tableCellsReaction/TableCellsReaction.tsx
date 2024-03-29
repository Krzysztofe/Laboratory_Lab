import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelReaction } from "../../../services/apiSlice";
import { solventIdx } from "../../../utils/solventIdx";
import { thValuesFirst, thValuesSecond } from "../tableEditForm/dataTableEditForm";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsTableCellsReaction";

const TableCellsReaction = (props: Partial<ModelReaction>) => {
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const getReactions = isOpen
    ? getTableBodyReactionsFirst
    : getTableBodyReactionsSecond;

  const getThValues = isOpen ? thValuesFirst : thValuesSecond

  return (
    <>
      {getReactions(props.reaction).map((reaction, idx) => {
        let result;
        if (isOpen && idx === 1) {
          result = solventIdx(reaction);
        } else if (isOpen && idx === 6) {
          result = Array.isArray(reaction) ? reaction.join(", ") : reaction;
        } else {
          result = reaction;
        }

        return <td data-cell = {`${getThValues[idx]}`} key={crypto.randomUUID()}>{result}</td>;

      })}
    </>
  );
};

export default TableCellsReaction;
