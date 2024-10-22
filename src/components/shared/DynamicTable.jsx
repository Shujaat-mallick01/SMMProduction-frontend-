import PropTypes from 'prop-types';

const DynamicTable = ({ columns, data, renderActions, renderColumnContent }) => {
  return (
    <table className="dynamic-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className={column.className || ''}>
              {column.label}
            </th>
          ))}
          {renderActions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key}>
                {renderColumnContent && renderColumnContent[column.key]
                  ? renderColumnContent[column.key](row)
                  : row[column.key]}
              </td>
            ))}
            {renderActions && (
              <td>
                {renderActions(row)}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


DynamicTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderActions: PropTypes.func,
};

DynamicTable.defaultProps = {
  renderActions: null,
};

export default DynamicTable;
