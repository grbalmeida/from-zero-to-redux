import React from 'react'
import { Card, CardActionArea, CardContent } from '@material-ui/core'

const HomeCard = () => (
  <div className='new-list-container'>
    <Card className='card'>
      <CardActionArea className='card-action-area'>
        <CardContent className='card-content'>
          <div>
            <p className='title'>Add new shopping list</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
)

export default HomeCard
