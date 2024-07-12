// const fadeIn = keyframes`
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// `;

// // const AnimatedDot = styled('svg')(({ theme, len }) => ({
// const AnimatedDot = styled("svg")<{ index: number }>(({ theme, index }) => ({
//   fill: theme.palette.text.primary,
//   opacity: "0",
//   stroke: "",
//   width: 3,
//   height: 3,
//   animation: `${fadeIn} 1s ease-in-out forwards`,
// }));

// const AnimatedEllipsis = ({ len = 3 }: { len: number }): ReactElement => {
//   return (
//     <Box display="flex" sx={{ "& > *": { mr: 0.5 } }}>
//       {Array.from({ length: len }, (_, index) => (
//         <AnimatedDot
//           key={index}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 16 16"
//           index={index + 1}
//           style={{
//             animationDelay: `${index}s`,
//           }}
//         >
//           <circle cx="8" cy="8" r="8" />
//         </AnimatedDot>
//       ))}
//     </Box>
//   );
// };