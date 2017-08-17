const contentNode =document.getElementById("contents");

const issues = [
    {
        id: 1,
        status: "Open",
        owner: "Ravan",
        created: new Date("2017-08-15"),
        effort: 5,
        completionDate: undefined,
        title: "Error in console when clicking Add"
    },
    {
        id: 2,
        status: "Assigned",
        owner: "Eddie",
        created: new Date("2017-08-16"),
        effort: 14,
        completionDate: new Date("2017-08-30"),
        title: "Missing bottom border on panel"
    }
]

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for IssueFilter</div>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;

        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : ""}</td>
                <td>{issue.title}</td>
            </tr>
        );
    }
}

IssueRow.propTypes = {
    issue: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        status: React.PropTypes.string,
        owner: React.PropTypes.string,
        created: React.PropTypes.Date,
        effort: React.PropTypes.number,
        completionDate: React.PropTypes.Date,
        title: React.PropTypes.string
    })
}

IssueRow.defaultProps = {
    children: "-- no title --",
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
        
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>                        
                    </tr>
                </thead>
                <tbody>{issueRows}</tbody>
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

    constructor() {
        super();
        this.state = { issues: [] };
        setTimeout(this.createTestIssue.bind(this), 2000);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(() => {
            this.setState({ issues: issues });
        }, 500);
    }

    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
    } 

    createTestIssue() {
        this.createIssue({
            status: "New",
            owner: "Pieta",
            created: new Date(),
            title: "Completion date should be optional",
            effort: 5
        });
    }

    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues} />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);