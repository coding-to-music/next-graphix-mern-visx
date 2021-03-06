import styled from 'styled-components'
import Link from 'next/link'
import { ThumbsUp } from '@styled-icons/feather/ThumbsUp'
import { elevation, below } from './styled/utilities'
import { Card } from './styled/elements/Card'
import Visualisation from './visualisations/Visualisation'

type LikedChartsProps = {
    liked: object,
    like: any,
    className: string
}

const LikedCharts = ({ liked, like, className }: LikedChartsProps) => (
  <div className={className}>
    <div className="inner">
      <div className="left">
        <h2>Liked charts</h2>
      </div>
      <div className="right">
        {liked.length ? (
          liked.map((graph) => (
            <Card key={graph._id}>
              <Link href={`/view/${graph._id}`}>
                <div>
                  <div className="graphTitle">
                    <h3>{graph.title}</h3>
                  </div>
                  <div className="vizWrapper">
                    <Visualisation graph={graph} />
                  </div>
                </div>
              </Link>
              <div className="actions">
                <div style={{ display: 'flex' }}>
                  <span style={{ marginRight: 5 }}>{graph.likes}</span>
                  <div className="like">
                    <ThumbsUp onClick={() => like(graph._id)} size="30" />
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <span>You haven't like any charts yet...</span>
        )}
      </div>
    </div>
  </div>
)

export default styled(LikedCharts)`

    background: var(--color-background);
    padding: 20px 0px;
  
    .inner {
      display: flex;
      padding: 20px 20px;
    }

    .left {
      flex-basis: 500px;
    }
  
    .right {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }


  .like {
    background: var(--color-button);
    border-radius: 50%;
    padding: 2px;
    border: 1px solid var(--color-heading);
    
    :hover {
      background: var(--color-button-hover);
    }
  }

  ${below.med`
    .inner {
      display: grid;
      grid-template-columns: 1fr;
    }

    .right {
      grid-template-columns: 1fr;
    }
  `}
    
    h2 {
      position: relative;
      margin: 0px;
      color: var(--color-paragraph);
      text-transform: uppercase;
    }
  
    h2:before {
      content: "";
      position: absolute;
      width: 25%;
      height: 3px;
      top: 0px;
      left: 0px;
      background-color: var(--color-button);
    }
  
    .createButton {
      background: var(--color-foreground);
      color: var(--color-button);
      border: none;
      ${elevation[1]}
    }
  
    .createButton:hover {
      color: var(--color-button-highlight);
    }
  
    .graphTitle {
      padding: 10px 20px;
      border-bottom: 1px solid var(--color-border);
  
      h3 {
        margin: 0px;
      }
    }
  
    .actions {
      display: flex;
      padding: 10px 20px;
      justify-content: space-between;
      border-top: 1px solid var(--color-border);
    }

    .vizWrapper {
      position: relative;
      height: 450px;
    }
  
    a {
      display: block;
      font-size: 2rem;
      text-decoration: none;
      color: var(--color-paragraph);
    }
`
