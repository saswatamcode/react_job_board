import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IJob } from "../../types";
import useStyles from "./styles";

interface JobModalProps {
  job: IJob | undefined;
  open: boolean;
  handleClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, open, handleClose }) => {
  const classes = useStyles();

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
            {job.title} @ {job.company}
          </DialogTitle>
          <DialogContent>
            <div className={classes.imageDiv}>
              <img
                height="100px"
                alt={`${job.company}-logo`}
                src={job.company_logo}
              />
            </div>
            <DialogContentText
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <a
              className={classes.link}
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={classes.apply} onClick={handleClose}>
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
