import { ModelReaction } from "../../../../services/apiSlice"; 
import { useFilteredReactions } from "../useFilteredReactions";

interface Props {
  counter: number;
  pageNumber: number;
}

const TablePagination = (props: Props) => {
  const { getReactionsTablePrint } = useFilteredReactions(props.counter);
  const reactionPerPage = 3;
  const pagesVisited = props.pageNumber * reactionPerPage;

  const displayReactions = getReactionsTablePrint
    .slice(pagesVisited, pagesVisited + reactionPerPage)
    .map((reaction: ModelReaction) => {
      return (
        <tr key={reaction.id}>
          <td>{reaction.name}</td>
          <td>{reaction.alcaloids}</td>
          <td>{reaction.substract}</td>
        </tr>
      );
    });

  return (
    <>
      {getReactionsTablePrint.length === 0 ? (
        <div className="reactionsHome__emptyTableMessage">
          Brak reakcji zapisanych w dzienniku
        </div>
      ) : (
        <div className="reactionsHome__container">
          <table className="reactionsHome__table">
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Alkaloidy</th>
                <th>Substraty</th>
              </tr>
            </thead>
            <tbody className="reactionsHome__tBody">{displayReactions}</tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default TablePagination;
