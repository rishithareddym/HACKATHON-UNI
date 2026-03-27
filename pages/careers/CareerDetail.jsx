import React from 'react';
import { useParams } from 'react-router-dom';
import CareerPageLayout from '../../components/careers/CareerPageLayout';
import { careerDetails } from '../../components/careers/careerDetails';

export default function CareerDetail() {
  const { slug } = useParams();
  const data = slug ? careerDetails[slug] : null;

  // Key ensures the fade/slide animation re-triggers on role changes.
  return <CareerPageLayout key={slug} data={data} slug={slug} />;
}

