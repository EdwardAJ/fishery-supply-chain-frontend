interface ChainParamsInterface {
  lotId: string
  activityId: string
  chainId: string
}

interface NodeInterface {
  id: string,
  label: string
}

interface EdgeInterface {
  id: string,
  from: string,
  to: string
}

export {
  ChainParamsInterface,
  NodeInterface,
  EdgeInterface
}
