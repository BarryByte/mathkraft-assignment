import * as React from 'react';
import { Button, buttonVariants } from '../../../components/ui/button'; 

function TestButton() {
  return (
    <div>
      <Button>Default Button</Button>

      <Button variant="secondary">Secondary Button</Button>

      <Button variant="destructive">Destructive Button</Button>

      <Button variant="outline">Outline Button</Button>

      <Button variant="ghost">Ghost Button</Button>

      <Button variant="link">Link Button</Button>

      <Button size="sm">Small Button</Button>

      <Button size="lg">Large Button</Button>

      {/* Using the icon size */}
      <Button  size="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          {/* Your icon here */}
        </svg>
      </Button>

      {/* Using asChild prop */}
      <div className="group">
        <Button asChild variant="outline">
          <a href="#" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              {/* Your icon here */}
            </svg>
            <span>Link with Button Styles</span>
          </a>
        </Button>
      </div>
    </div>
  );
}

export default TestButton;