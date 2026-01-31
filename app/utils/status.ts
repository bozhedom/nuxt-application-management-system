const statusLabels: Record<StatusOption, string> = {
  active: 'Активна',
  pending: 'В ожидании',
  approved: 'Подтверждён',
  rejected: 'Отклонён',
  completed: 'Завершён',
  cancelled: 'Отменён',
  draft: 'Черновик',
};

export function getStatusLabel(status: StatusOption): string {
  return statusLabels[status] || status;
}