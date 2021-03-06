import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { PlusCircle } from '@styled-icons/boxicons-regular/PlusCircle'
import { ThumbsUp } from '@styled-icons/feather/ThumbsUp'
import { DeleteOutline } from '@styled-icons/material/DeleteOutline'
import Visualisation from './visualisations/Visualisation'
import { Card } from './styled/elements/Card'
import { elevation, below } from './styled/utilities'

type GraphListProps = {
  className: string,
  graphs: any[],
  deleteChart: (_id: string) => void,
  likeChart: (_id: string) => void
}

const GraphList = ({
  graphs, deleteChart, className, likeChart,
}: GraphListProps) => {
  const router = useRouter()

  return (
    <div className={className}>
      <div className="inner">
        <div className="left">
          <h2>Your graphs</h2>
        </div>
        <div className="right">
          <button className="createButton" onClick={() => router.push('/create')}>
            <PlusCircle size="200px" />
            <h3>New graph</h3>
          </button>
          {graphs.map((graph) => (
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
                    <ThumbsUp onClick={() => likeChart(graph._id)} size="30" />
                  </div>
                </div>
                <div className="bin">
                  <DeleteOutline size="30" onClick={() => deleteChart(graph._id)} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default styled(GraphList)`
  background: var(--color-primary);
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

  ${below.med`
    .inner {
      display: grid;
      grid-template-columns: 1fr;
    }

    .right {
      grid-template-columns: 1fr;
    }
  `}


  .like {
    background: var(--color-button);
    border-radius: 50%;
    padding: 2px;
    border: 1px solid var(--color-heading);
    :hover {
      background: var(--color-button-hover);
    }
  }

  .bin {
    background: var(--color-accent);
    border-radius: 50%;
    border: 1px solid var(--color-heading);
    padding: 2px;
  }

  h2 {
    position: relative;
    margin: 0px;
    color: var(--color-heading);
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
    min-height: 500px;
    background: var(--color-foreground);
    color: var(--color-button);
    border: none;
    ${elevation[1]};
    border: 1px solid var(--color-border);
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
    border-top: 1px solid var(--color-border);
    justify-content: space-between;
  }
  
  .vizWrapper {
    position: relative;
    height: 450px;
    width: calc(100% - 2px);
    margin: 0px auto;
  }

  a {
    display: block;
    font-size: 2rem;
    text-decoration: none;
    color: var(--color-paragraph);
  }
`
