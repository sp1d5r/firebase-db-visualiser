import React from "react";
import ScrollableLayout from "../layouts/ScrollableLayout";
import { BackgroundBeamsWithCollision } from "../components/aceturnity/background-beams-with-collision";
import { Button } from "../components/shadcn/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/shadcn/card";
import { Badge } from "../components/shadcn/badge";

export const Landing: React.FC = () => {
  return (
    <ScrollableLayout>
      <div className="flex flex-col gap-2">   
      <div className="relative flex flex-col justify-start items-center min-h-[80vh]">
      <BackgroundBeamsWithCollision className="absolute w-[100vw] min-h-[80vh]">
          <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl max-w-4xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Make Your Firebase Data Model{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 md:py-4 from-purple-500 via-orange-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Crystal Clear.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-orange-500 via-orange-500 to-pink-500 py-2 md:py-4">
                <span className="">Crystal Clear.</span>
            </div>
            </div>
            </h2>
            <p className="text-lg md:text-xl mb-8 dark:text-white">
              Transform your Firebase database into beautiful, type-safe schemas.
              Perfect for startups presenting to VCs or teams seeking better data visibility.
            </p>
            <Button className="dark:text-white">
              Visualize Your Firebase Data
            </Button>
            <div className="mt-12 flex items-center justify-center dark:text-white">
              <div className="flex -space-x-2">
                <img src="https://avatars.githubusercontent.com/u/38949593?v=4" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://avatars.githubusercontent.com/u/38949593?v=4" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://avatars.githubusercontent.com/u/38949593?v=4" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-sm font-bold">
                  5k+
                </div>
              </div>
              <div className="ml-4 flex flex-col justify-center items-start">
                <span className="text-yellow-400">★★★★★</span>
                <span>from 5k+ happy users</span>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center dark:text-white my-4">
        From Firebase to Clear Data Architecture in Minutes
      </h1>
      
      <div className="grid grid-cols-5 gap-4 mb-4 max-w-6xl mx-auto">
        <Card className="col-span-3 hover:border-orange-500 ease-in-out">
          <CardHeader>
            <CardTitle>Instant Schema Generation</CardTitle>
            <CardDescription>
              Upload your Firebase service account and watch as we automatically analyze your data structure
              and generate comprehensive schemas.
              <br />
              <Button variant="link" className="p-0">See how it works →</Button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-4 border rounded p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Schema Preview</span>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span>interface UserData {'{'}</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span>id: string;</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span>profile: ProfileType;</span>
                </div>
                <div className="flex justify-between">
                  <span>{'}'}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 hover:border-orange-500 ease-in-out">
          <CardHeader>
            <CardTitle>Multi-Format Export</CardTitle>
            <CardDescription>
              Export your schemas to TypeScript, Python (Pydantic), or other formats with a single click.
              <br />
              <Button variant="link" className="p-0">View formats →</Button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-2">
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Pydantic</Badge>
              <Badge variant="outline">JSON Schema</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto">
        <div className="col-span-2 space-y-4">
          <Card className="hover:border-orange-500 ease-in-out">
            <CardHeader>
              <CardTitle>Data Analysis</CardTitle>
              <CardDescription>
                Deep analysis of your Firebase collections, including type inference and relationship mapping.
                <br/>
                <Button variant="link" className="p-0">Learn more →</Button>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:border-orange-500 ease-in-out">
            <CardHeader>
              <CardTitle>Security First</CardTitle>
              <CardDescription>
                Your Firebase credentials never leave your browser. All processing happens client-side.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="col-span-3 hover:border-orange-500 ease-in-out">
          <CardHeader>
            <CardTitle>Visual Data Model</CardTitle>
            <CardDescription>
              Interactive visualization of your database structure, perfect for technical presentations and documentation.
              <br/>
              <Button variant="link" className="p-0">View demo →</Button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-4 border rounded p-4">
              <div className="text-center text-gray-500">Interactive Schema Diagram</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-16 px-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img 
                src="/schema-visualization.png" 
                alt="Firebase Schema Visualization" 
                className="w-full aspect-square h-auto object-cover rounded-lg shadow-lg"
            />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center dark:text-white">
            <p className="font-bold text-orange-500">VISUAL SCHEMA MAPPING</p>
            <h2 className="text-3xl font-bold mb-4">Clear Data Architecture</h2>
            <p className="text-lg mb-6">
            Transform complex Firebase collections into clear, visual representations.
            Perfect for technical documentation, team communication, and VC presentations.
            <br/>
            <Button>Try Schema Visualization</Button>
            </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-16 px-4 dark:text-white">
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
            <p className="font-bold text-orange-500">TYPE-SAFE EXPORTS</p>
            <h2 className="text-3xl font-bold mb-4">Code-Ready Schemas</h2>
            <p className="text-lg mb-6">
            Export your Firebase data model to TypeScript interfaces, Pydantic models,
            or other formats. Start with type-safety from day one.
            <br/>
            <Button>Export Sample Schema</Button>
            </p>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img 
                src="/code-export.png" 
                alt="Code Export Preview" 
                className="w-full aspect-square h-auto object-cover rounded-lg shadow-lg"
            />
        </div>
      </div>

      <div className="relative flex items-center justify-center my-50 min-h-[20vh]">
        <div className="absolute w-[100vw] min-h-[20vh] bg-gray-800 flex flex-col justify-center items-center">
            <h1 className="relative text-4xl font-bold m-0">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 from-purple-500 via-orange-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">Visualize Your Data</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-orange-500 via-orange-500 to-pink-500 py-2">
                    <span className="">Visualize Your Data</span>
                </div>
            </h1>
            <p className="text-white mb-1">Start mapping your Firebase schema today</p>
            <Button variant="secondary">Get Started Free</Button>
        </div>
      </div>
      </div>
    </ScrollableLayout>
  );
};