import useApi from 'hooks/useApi';
import useMessages from 'hooks/useMessages';
import { Icon, Icons, LoadingButton, Text } from 'react-basics';

export default function TeamMemberRemoveButton({ teamUserId, disabled, onSave }) {
  const { formatMessage, labels } = useMessages();
  const { del, useMutation } = useApi();
  const { mutate, isLoading } = useMutation(() => del(`/teamUsers/${teamUserId}`));

  const handleRemoveTeamMember = () => {
    mutate(
      { teamUserId },
      {
        onSuccess: () => {
          onSave();
        },
      },
    );
  };

  return (
    <LoadingButton onClick={() => handleRemoveTeamMember()} disabled={disabled} loading={isLoading}>
      <Icon>
        <Icons.Close />
      </Icon>
      <Text>{formatMessage(labels.remove)}</Text>
    </LoadingButton>
  );
}
