import { useEffect } from "react";
import { useReactionsQuery } from "../../../services/apiSlice";
import TableEditForm from "../tableEditForm/TableEditForm";
import TableCellsReaction from "../tableCellsReaction/TableCellsReaction";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { getReactions } from "../../../redux/storeFeatures/tableReactionsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import TableBtns from "../tableBtns/TableBtns";

const TableBody = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useReactionsQuery(undefined);

  const { printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );

  useEffect(() => {
    if (data) {
      dispatch(getReactions(data));
    }
  }, [data, dispatch]);

  isLoading && <TableBodyRequestMessage message={"Loading..."} />;
  if (error) {
    if ("error" in error)
      return <TableBodyRequestMessage message={error.error} />;
  }
  if (printReactions.length === 0) {
    return <TableBodyRequestMessage message={"Brak zapisanych reakcji"} />;
  }

  return (
    <tbody>
      {printReactions?.map(reaction => {
        return (
          <tr key={reaction.id}>
            {reaction.isEdit ? (
              <TableCellsReaction reaction={reaction} />
            ) : (
              <TableEditForm />
            )}
            <TableBtns reaction={reaction} />
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
