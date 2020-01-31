import React from 'react';
import { IProps } from './types';
import { Card } from './Card';

export const Section: React.FC<IProps> = () => <div className="section">
    <Card header='Card Component'/>
</div>