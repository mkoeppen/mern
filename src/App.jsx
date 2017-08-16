const contentNode =document.getElementById("contents");

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for IssueFilter</div>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 4 };
        return (
            <tr>
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.issue_title}</td>
            </tr>
        );
    }
}

IssueRow.propTypes = {
    issue_id: React.PropTypes.number.isRequired,
    issue_title: React.PropTypes.string
}

IssueRow.defaultProps = {
    issue_title: "-- no title --",
}

class IssueTable extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 6 };
        return (
            <table>
                <thead>
                    <tr>
                        <th style={borderedStyle}>Id</th>
                        <th style={borderedStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1} issue_title="Error in console when clicking Add" />
                    <IssueRow issue_id={2} issue_title="Missing bottom border on panel" />
                    <IssueRow issue_id={3} />
                </tbody>
            </table>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for IssueAdd</div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);