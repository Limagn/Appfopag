import React from "react";
import { View, Text } from "react-native";
import { cn } from "../../libs/utils";

type CardPropsView = React.ComponentProps<typeof View> & {
  className?: string;
};

type CardPropsText = React.ComponentProps<typeof Text> & {
  className?: string;
};

const Card = React.forwardRef<View, CardPropsView>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn("bg-card mb-5 pt-2 pb-2 rounded-xl shadow-md w-full lg:w-1/4 border border-border", className)}
    {...props}
  />
));
Card.displayName = "Card";


const CardHeader = React.forwardRef<View, CardPropsView>(({ className, ...props }, ref) => (
  <View
  ref={ref}
  className={cn("flex flex-row justify-between space-y-1.5 pb-2", className)}
  {...props}
  />
));
Card.displayName = "CardHeader";


const CardTitle = React.forwardRef<View, CardPropsText>(({ className, ...props }, ref) => (
  <Text
  ref={ref}
  className={cn("text-2xl font-semibold text-foreground tracking-tight mt-1 pl-4", className)}
  
  {...props}
  />
));
Card.displayName = "CardTitle";


const CardContent = React.forwardRef<View, CardPropsView>(({ className, ...props }, ref) => (
  <View
  ref={ref}
  className={cn("flex flex-row justify-between pl-4 pr-4 pb-2", className)}
  {...props}
  />
));
Card.displayName = "CardContent";


const CardDescription = React.forwardRef<Text, CardPropsText>(({ className, ...props }, ref) => (
  <Text
  ref={ref}
  className={cn("text-2xl text-muted-foreground", className)}
  {...props}
  />
));
Card.displayName = "CardDescription";


const CardFooter = React.forwardRef<View, CardPropsView>(({ className, ...props }, ref) => (
  <View
  ref={ref}
  className={cn("flex flex-row justify-between pl-4 pr-5 pb-2", className)}
  {...props}
  />
));
Card.displayName = "CardFooter";

const CardFooterText = React.forwardRef<Text, CardPropsText>(({ className, ...props }, ref) => (
  <Text
  ref={ref}
  className={cn("text-sm text-muted-foreground pl-1", className)}
  {...props}
  />
));
Card.displayName = "CardFooterText";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardFooterText };