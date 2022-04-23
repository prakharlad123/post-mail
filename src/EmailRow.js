import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import React from 'react';
import './EmailRow.css';

function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className='emailRow'>
        <div className='emailRow__options'>
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>

        <h3 className='emailRow__title'>
            {title}
        </h3>

        <div className='emailRow__message'>
            <h4>{subject}
                <span className='emailRow__description'>
                    {description}
                </span>
            </h4>
        </div>

        <div className='emailRow__description'>
            {time}
        </div>
    </div>
  );
}

export default EmailRow;