interface MyIconProps {
    src: string;
    size?: number;
}

function MyIcon({ src }: MyIconProps) {
    return (
        <div 
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: 'currentColor',
                maskImage: `url(${src})`,
                WebkitMaskImage: `url(${src})`,
                maskRepeat: 'no-repeat',
                maskSize: 'contain',
                maskPosition: 'center',
                display: 'block',
            }}
        />
  );
}

export default MyIcon