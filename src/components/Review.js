import React from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({ reviewData }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                See Reviews
            </Button >
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        {
                            reviewData.map(item => 
                                <div>
                                    <Card body style={{ width: '400px' }}>
                                    <h3>{item.name}{item.date}</h3>
                                    <h6>Rating : {item.rating}</h6>
                                    <p>{item.comments}</p>
                                    </Card>
                                </div>
                            )

                        }

                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Review