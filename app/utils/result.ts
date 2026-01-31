const resultLabels: Record<VerificationResultOption, string> = {
  in_progress: 'В обработке',
  passed: 'Пройдена',
  failed: 'Не пройдена',
  requires_review: 'Требует проверки',
  on_hold: 'На удержании',
  expired: 'Истекла',
};

export function getResultLabel(result: VerificationResultOption): string {
  return resultLabels[result] || result;
}
