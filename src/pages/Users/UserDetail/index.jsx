import React, { useEffect } from 'react';
import { Card, Descriptions, Skeleton } from 'antd';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { func } from 'prop-types';
import { userType } from '../../../utils/types/usersTypes';
import { fetchUserDetailsNotifier } from '../../../redux/modules/users/actions/fetchUserDetails';

const UserDetail = ({ user, fetchUserDetails }) => {
  const {
    params: { userId },
  } = useRouteMatch();

  useEffect(() => {
    fetchUserDetails(userId);
  }, []);

  if (!user) return <Skeleton />;

  return (
    <Card
      title={user ? `${user.id} - ${user.name}` : 'User Info'}
      className="user-detail"
    >
      {user ? (
        <Descriptions>
          <Descriptions.Item label="email">{user.email}</Descriptions.Item>
          <Descriptions.Item label="phone">{user.phone}</Descriptions.Item>
          <Descriptions.Item label="username">
            {user.username}
          </Descriptions.Item>
          <Descriptions.Item label="website">{user.website}</Descriptions.Item>
          <Descriptions.Item label="Address">
            {`${user.address.street} - ${user.address.suite}, ${user.address.city}`}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <Skeleton active />
      )}
    </Card>
  );
};

UserDetail.propTypes = {
  user: userType,
  fetchUserDetails: func.isRequired,
};

UserDetail.defaultProps = {
  user: undefined,
};

const mapStateToProps = ({ users }) => ({
  user: users.userDetail,
});

const mapDispatchToProps = {
  fetchUserDetails: fetchUserDetailsNotifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
