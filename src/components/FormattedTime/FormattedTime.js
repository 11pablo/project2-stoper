import styles from './FormattedTime.module.scss';

const FormattedTime = ({time}) => {
   const formatTime = millseconds => {
        return (
            <div>
                <span>{("0" + Math.floor((millseconds / 3600000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((millseconds / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((millseconds / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((millseconds / 10) % 100)).slice(-2)}</span>
            </div>
        )
   };

  return (
    <div className={styles.time}>
       {formatTime(time)}
    </div>
  );

};

export default FormattedTime;