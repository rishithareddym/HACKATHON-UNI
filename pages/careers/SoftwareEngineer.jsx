import React from 'react';
import CareerPageLayout from '../../components/careers/CareerPageLayout';
import { careerDetails } from '../../components/careers/careerDetails';

export default function SoftwareEngineer() {
  return <CareerPageLayout data={careerDetails['software-engineer']} slug="software-engineer" />;
}

