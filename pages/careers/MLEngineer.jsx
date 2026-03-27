import React from 'react';
import CareerPageLayout from '../../components/careers/CareerPageLayout';
import { careerDetails } from '../../components/careers/careerDetails';

export default function MLEngineer() {
  return <CareerPageLayout data={careerDetails['ml-engineer']} slug="ml-engineer" />;
}

