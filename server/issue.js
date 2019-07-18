const validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true,
};

const issueFieldType = {
  issueState: 'required',
  owner: 'required',
  effort: 'optional',
  creation: 'required',
  completion: 'optional',
  description: 'required',
};


function cleanupIssue(issue) {
  const cleanedUpIssue = {};
  Object.keys(issue).forEach((field) => {
    if (issueFieldType[field]) cleanedUpIssue[field] = issue[field];
  });
  return cleanedUpIssue;
}


function convertIssue(issue) {
  if (issue.creation) issue.created = new Date(issue.creation);
  if (issue.completion) issue.completionDate = new Date(issue.completion);
  return cleanupIssue(issue);
}


function validateIssue(issue) {
  const errors = [];
  Object.keys(issueFieldType).forEach(field => {
    if (issueFieldType[field] === 'required' && !issue[field]) {
      errors.push(`Missing mandatory field: ${field}`);
    }
  });

  if (!validIssueStatus[issue.issueState]) errors.push(`${issue.issueState} is not a valid status.`);

  return (errors.length ? errors.join('; ') : null);
}


module.exports = {
  validateIssue,
  cleanupIssue,
  convertIssue,
};
