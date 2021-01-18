import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IJob } from "../../types";

interface JobModalProps {
  job: IJob | undefined;
  open: boolean;
  handleClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, open, handleClose }) => {
  return (
    <div>
      {job && (
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-labelledby="job modal"
          aria-describedby="modal for selected job"
        >
          <DialogTitle>
            {job.title} -{job.company}
            <img alt={`${job.company}-logo`} src={job.company_logo} />
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              <Button onClick={handleClose} color="primary">
                Apply
              </Button>
            </a>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};
export default JobModal;
