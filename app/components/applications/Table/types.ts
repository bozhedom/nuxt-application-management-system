export interface ITableProps {
  applications: IApplication[];
  readyApplications: Set<number>;
}

export interface IRowProps {
  application: IApplication;
  isReady: boolean;
}
