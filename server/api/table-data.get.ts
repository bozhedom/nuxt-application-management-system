import type { IApplication } from '~/types/api';

export default defineEventHandler(async (): Promise<IApplication[]> => {
  const applications: IApplication[] = [
    {
      id: 1,
      number: '25-123451',
      status: 'active',
      verificationResult: 'in_progress',
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    },
    {
      id: 2,
      number: '25-123452',
      status: 'active',
      verificationResult: 'in_progress',
      createdAt: new Date(2026, 0, 1).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    },
    {
      id: 3,
      number: '25-123453',
      status: 'active',
      verificationResult: 'in_progress',
      createdAt: new Date(2025, 4, 11).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    },
    {
      id: 4,
      number: '25-123454',
      status: 'active',
      verificationResult: 'in_progress',
      createdAt: new Date(2026, 0, 14).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    },
    {
      id: 5,
      number: '25-123455',
      status: 'active',
      verificationResult: 'in_progress',
      createdAt: new Date(2025, 11, 31).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    },
  ];

  return applications;
});
